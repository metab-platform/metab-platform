const a=[.06,.01,0,.18,0,.67,.24,.49,0,.35,0,.98,.9,.02,0,.12,.07,.46,.94,.48,.78,.67,.48,0,0,0,.71,.14,.97,.84,.05,.93,0,.06,.12,.53,0,0,.34,.17,.9,0,.36,.19,.12,0,.57,.7,.07,.15,0,.23,.55,0,.47,0,0,.22,.8,0,.84,.02,0,.28,.04,.78,0,0,.23,.65,.39,.12,.18,.78,0,.72,.57,.85,0,.28,.36,0,.85,0,.86,.48,0,.06,.03,0,.37,.23,0,0,.09,.97,0,.53,.25,.64,.01,0,.1,0,.08,.02,.97,.14,0,.03,.97,.43,.09,0,.9,0,.03,.35,.4,0,.6,.99,.01,.26,.43,.24,0,.58,.04,0,.66,.59,.93,.67,.36,.25,.41,.18,.85,.21,0,.33,.02,0,.36,.17,.47,.14,0,.26,0,0,.84,.37,.47,.16,.28,.37,.15,0,.15,.04,.35,.34,0,.65,.44,.58,.28,0,.66,.33,.64,.26,.01,.21,.81,.89,.9,0,.79,.4,.54,.03,.15,.62,.8,.59,.82,.7,.67,.05,.02,0,0,0,.03,.05,.67,.76,0,0,0,.5,.56,.13,.64,.47,.44,.16,.55,0,.57,0,.18,.86,.57,.09,.62,.78,0,.41,.37,0,0,0,.46,.68,.7,.08,.79,.01,0,.01,.16,.44,0,.01,.66,0,.78,0,.39,.07,0,.07,.04,.96,.72,.03,.23,.27,.24,.96,0,.22,.76,0,.48,.07,.46,.15,0,0,.29,.11,.8,0,0,.03,.57,.11,0,0,0,.94,.48,.91,0,.13,.51,.56,0,.11,.21,0,.24,0,.55,.72,.07,.51,0,.07,.3,.3,0,.16,.45,.06,.12,0,.35,.85,.3,.06,.34,.09,.18,0,0,.01,.6,.46,.58,.12,.54,.47,.02,.87,0,.71,0,0,.59,.66,0,.08,.67,.34,.19,.01,.42,.26,.03,.71,.8,.05,.06,.64,.01,.43,.34,.89,0,.02,.51,.94,.35,.77,0,.01,.83,.29,.2,0,.89,.61,.01,.01,.01,.82,.62,.07,.65,.01,.35,0,.52,.48,.34,.03,0,.51,.66,.53,.41,0,.09,.16,0,.53,0,.49,.32,.04,.46,.74,0,0,0,.64,.29,.17,.03,0,.09,.74,.23,.36,.73,.79,0,0,.07,.49,0,.02,0,0,.01,.12,.01,0,.54,.58,0,.01,.45,.39,.61,0,.36,.92,.02,0,0,.67,.31,.01,.48,.47,0,.82,.95,0,.33,0,0,.01,.08,0,.01,.24,.3,.4,0,0,.32,.21,0,.16,0,.26,.69,.08,.34,0,.41,0,0,0,.01,.59,.47,.06,.02,.08,0,0,.12,0,.3,.46,.67,0,0,0,0,.71,.01,0,.02,0,.95,.65,.06,.3,.06,.09,.03,.54,.07,.01,.01,0,.64,.48,0,.18,.52,.38,0,.05,0,.1,.02,0,0,.95,0,.89,.01,.85,.47,.86,.33,.36,.45,0,.93,0,.22,.84,.75,.41,.3,.81,.37,0,.32,.76,.19,.43,.61,.38,.93,0,.05,.43,.91,.38,.88,.23,.62,.93,.58,.13,.02,.02,.96,0,0,.03,.06,.75,.46,.3,.46,.47,0,.94,.86,.29,.9,.98,.07,.05,.48,.03,0,.01,0,.02,.01,0,.18,.42,.72,.23,.59,.74,0,.63,.01,0,0,.09,.4,0,.76,.03,.18,.13,.16,0,0,.01,.74,0,0,0,.01,.72,.13,.19,.25,.83,.34,0,.1,0,.53,.12,.56,.86,0,.13,.61,.3,.62,.27,.97,.48,.89,.52,.33,.07,.01,.19,.56,.37,.65,.48,0,.01,0,.37,.68,.96,.55,0,.07,.14,.01,0,.05,0,.09,.03,.57,0,.92,0,0,.37,0,.75,.07,.81,0,.27,0,.2,.34,.72,.12,.75,0,0,0,.93,.76,.71,.25,.01,.01,0,.02,.27,.76,.06,.79,0,.74,.33,.01,0,0,.2,.62,.12,.02,.94,.09,.1,.57,.7,.02,.13,0,.01,.01,.01,.62,.09,.03,.13,.38,.66,0,.27,.69,.03,.58,0,.08,.84,.35,.06,.06,.01,0,0,0,.03,.56,.67,.25,.02,.02,.05,0,.03,.17,.29,0,.67,.32,.64,0,.01,.7,.54,.89,.32,0,0,.23,.32,.6,.1,1,.53,0,.04,.91,.37,.01,.86,.75,.55,0,.04,.21,0,0,.68,.42,.34,.02,.44,0,.69,.68,.09,0,.04,0,.57,.02,.35,.57,0,.01,.07,.25,.84,.27,.54,.45,.78,.13,0,0,.44,0,.03,0,.59,.06,.43,.16,0,0,0,0,.04,.24,1,.32,0,0,.86,.03,.52,0,.61,.49,0,.49,.2,.38,0,.41,0,.92,.38,.83,.21,.53,0,.29,.44,.59,.72,.88,.02,.79,.67,.15,0,.81,.53,.67,0,.09,.4,0,.18,.99,.69,0,.32,.04,.83,.19,.48,0,.23,0,0,.95,.1,.02,.22,.2,.79,.92,.87,.14,.36,.13,.75,.11,.19,.34,.19,.31,.81,.48,0,.08,0,0,.73,.65,0,0,.05,0,.02,.38,.48,.06,1,.01,.5,.05,0,.01,.64,.34,.2,.27,0,.52,.53,.63,.11,.27,.55,.92,.11,.23,.57,.55,.29,.57,.27,.24,.04,.06,0,0,0,.91,0,.01,.45,.1,.01,0,0,0,0,.69,.36,.09,0,.87,.25,.34,0,.99,.18,.05,0,0,.54,.09,.86,.52,.23,.96,.97,0,.01,0,.11,0,.66,.18,.02,.04,.35,.82,.07,.47,.95,.46,.03,0,.01,0,.04,.22,.68,.5,0,0,.97,.4,.03,.04,.14,.01,.8,.74,.64,.25,.44,.69,.4,.88,.72,.59,.68,.69,.23,.04,.55,.8,.27,.21,.57,.09,.35,.3,.54,.12,.02,.92,.48,.91,.04,0,.55,.01,.79,.01,.38,.05,.21,.56,.85,0,.17,.98,.37,.29,.32,0,.11,.83,0,0,.16,.09,.94,.82,0,.47,.74,.44,.71,.52,.01,.5,.01,.29,0,.1,.11,.01,.65,.3,.02,.12,0,.41,.69,.05,0,.31,.24,.57,0,.01,.25,.8,.98,.64,.01,.4,0,0,.67,.12,0,.65,.68,.48,.46,.86,.89,.27,.12,.69,0,.97,0,0,.87,.09,.02,.34,.31,0,0,.44,.51,0,.02,.02,.01,0,.01,0,.63,.66,.53,.95,.45,.69,.14,.74,0,.63,0,.51,0,.52,.41,.21,.18,.14,0,.1,.85,.71,0,0,.28,.78,0,0,.12,.65,.67,0,.93,.07,.01,0,.27,0,.64,.01,.48,.02,.66,.6,0,.65,.64,.35,.29,.53,.5,0,0,.08,.3,0,.46,0,.01,0,.21,.25,.97,.01,.47,.01,.53,0,.16,.01,.85,.29,.25,.75,.29,.3,.65,0,0,.92,.01,.06,.16,.92,.62,0,.65,.38,0,.01,0,.54,.01,.61,0,.3,.01,.35,.01,.55,.47,0,.81,.34,.05,0,.5,.36,0,.12,.17,.99,0,0,.31,.26,.2,.76,.83,.17,.07,.63,.05,0,.49,0,0,0,.93,.33,.2,0,0,0,.16,.3,.77,.45,.6,0,.18,0,.79,.1,.19,.29,.25,.6,.03,.51,0,.02,0,.36,.52,.75,.7,.16,.56,.03,.68,0,.92,0,.01,.01,.15,.07,.21,.46,.01,.01,.67,0,.6,.01,.08,0,.13,.37,.37,.94,0,0,.09,.06,.38,.75,.01,.01,.02,0,.01,.26,.05,.9,0,.8,.04,0,.15,.17,.02,.01,.6,.5,.24,.33,0,0,.46,.53,.58,.09,.28,.69,.92,.12,.01,.41,.89,.69,0,.02,.3,0,.8,.65,.31,.98,.01,0,.33,.57,0,0,.78,.03,.06,.59,.23,.37,.15,.04,0,.39,.11,.56,.27,.05,.67,0,0,.61,.11,.28,.09,0,.38,.18,.66,.5,.01,.05,0,.47,.17,.9,.07,.63,.91,.78,.38,.21,.91,.04,0,.02,.92,.14,0,.35,0,.98,.15,0,.04,.39,.52,0,0,.33,.71,.7,.01,0,0,.46,.72,.04,.99,.01,.01,.66,.31,.78,0,.59,.17,.52,.73,0,.52,.73,.85,.01,.59,.01,.9,.99,0,.52,.92,0,.56,0,0,.86,.24,.33,.77,.56,0,.96,0,.7,.96,.3,.21,.74,0,.12,.48,.17,0,0,0,.01,.11,.84,.94,.16,.04,.29,.27,.56,0,.5,.82,.02,0,.38,.11,.65,.8,.01,.54,.01,0,.07,.72,.24,0,.48,.01,.86,0,.11,0,.64,.88,.24,0,.25,.44,.04,.53,.65,.3,.08,0,.91,.44,0,.95,.09,0,0,.07,.26,0,0,.17,.3,.14,.23,.7,.01,.21,.34,0,.08,.44,.02,.12,.18,.89,.01,.29,.21,.34,.01,.01,.52,0,0,.9,.38,0,.02,0,0,.28,.01,.02,.02,0,.02,.28,0,.48,0,.03,0,.02,.33,.39,0,.1,.02,0,0,.54,.1,.26,.25,.48,0,.24,0,.63,0,.01,0,0,.49,0,.92,.21,.03,0,.13,.57,0,.02,.01,.01,.07,.57,.01,0,0,.62,.91,.75,.29,.69,.01,.29,.1,0,.29,.81,.38,.02,0,0,.59,.92,0,0,.01,.01,.92,.73,0,0,.98,0,.02,0,.44,0,.65,.13,.97,.72,.12,.67,.31,.33,0,.72,0,.78,.12,.7,.95,.01,0,0,0,0,.05,.14,.42,.28,.01,.01,0,.01,.04,0,.03,.01,.03,.58,.34,.12,.01,.15,.59,0,.01,.01,.02,.86,.01,.04,.01,.14,0,.04,.39,.39,0,.7,.02,.18,0,0,.82,0,.46,.02,0,.99,.04,0,.44,.21,.9,.75,.42,.25,.6,.01,0,0,.04,0,0,0,0,0,0,.64,.66,.26,0,0,0,.91,.63,.59,.67,0,0,.08,.41,0,.06,.25,.01,.49,.03,0,0,.2,.66,.88,.56,.26,.29,0,.18,0,.33,0,.2,0,.48,.54,0,.75,0,.56,0,.86,0,.01,.13,.04,.02,0,.39,.97,.55,0,.35,0,.15,.02,.91,.02,.38,.54,.07,.53,.03,0,.82,0,0,.24,.01,.39,.27,.42,.93,0,0,0,.21,0,0,.66,.01,.06,.08,.17,0,0,0,.06,.14,.56,.01,.05,0,0,.11,.59,.11,.85,0,.09,.11,.37,0,0,0,.01,0,0,.02,0,.04,0,.08,0,.58,0,.05,0,0,0,.12,.38,.11,.28,.01,.98,.21,.76,.01,.27,.28,0,.01,.03,.08,0,.76,0,.01,.23,.1,.11,.86,.14,0,.81,.36,0,.36,.83,.02,.48,.01,.97,.83,0,.74,.24,0,.16,0,0,0,.38,0,.98,0,.02,.69,.28,0,0,.14,.42,.15,0,.8,.79,0,0,0,.06,.14,.5,.01,.16,.56,.56,.71,.67,0,.02,.87,0,.01,.42,.62,.36,.01,0,.96,.35,.01,.16,0,.03,.09,0,0,.01,.1,0,.85,0,.01,.32,.92,0,.01,.42,0,0,.02,0,.13,.22,.18,.37,0,.01,.11,.94,.31,.42,0,0,.04,.76,.01,0,0,0,0,.17,.06,.27,0,.55,.21,.85,.23,.76,0,0,.9,0,.62,0,.01,.36,.01,.42,.17,.21,.51,.63,.57,.01,.01,0,0,.43,.58,.01,.13,.08,0,.74,.65,0,0,.35,.05,0,.43,0,.32,0,.78,0,.63,.55,0,0,0,.01,0,.27,0,.66,.02,.01,.03,.24,.01,0,0,0,0,0,.59,0,.25,.88,.88,0,0,0,0,0,.52,.04,0,.08,0,0,.34,0,.52,.84,.04,0,0,0,1,.51,.47,.22,0,.25,0,0,0,.13,.84,.04,.16,.95,.29,0,.21,.24,0,.36,.53,.01];export{a as pvalData};
