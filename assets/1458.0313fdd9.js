const a=[.31,.68,.37,.15,.97,.01,.9,0,.05,.42,.02,.05,.28,.22,0,.44,.74,.57,.17,.34,.02,0,.15,0,.67,.18,0,.04,.43,0,.39,0,.53,.07,.05,.18,.21,.01,.75,.8,.03,.48,.45,.67,.01,.09,.03,.03,0,0,.18,.02,.32,.82,0,0,.61,0,.06,.67,0,.8,.06,.05,0,0,.2,0,.46,.94,.69,.13,0,.01,.81,.63,.39,0,.4,0,.24,.74,.72,.25,0,0,.8,.5,.41,.63,.04,.96,0,.02,0,.48,.6,.29,.14,0,.97,.36,.05,.08,0,.53,.32,0,.97,0,.58,0,.89,.18,.06,.93,.12,0,.01,.47,.14,.14,.38,.14,.01,0,.27,.3,.02,.38,0,.14,.76,0,.17,.22,0,.02,0,.17,.09,.04,0,.59,.02,.05,.42,.1,.13,.4,.36,.01,.75,.32,0,0,.7,.4,.03,0,0,0,.04,0,0,0,.9,0,0,.5,.08,.01,0,0,0,0,.96,0,0,.81,.63,.35,.59,.09,0,.28,.45,.11,0,.39,.65,0,.17,0,.01,.45,.01,.19,.31,0,.07,.24,.64,.8,.36,.04,.28,0,0,.9,0,.01,.17,.07,0,.03,.44,0,0,0,.01,0,.48,.59,.13,.51,0,0,.02,0,.33,.07,0,.32,.72,.04,0,0,.28,.39,0,0,0,0,0,.08,.28,.03,.98,.4,0,.36,0,.14,.1,.41,.97,.22,0,.39,.41,.13,.05,.09,.03,0,0,.06,.22,.28,.01,.45,.55,.64,.22,.84,0,0,.21,0,0,0,.44,.62,0,.5,0,.24,0,0,0,0,.35,.13,0,.31,.06,.11,.03,.26,.97,.51,0,.76,.32,.74,.43,0,0,0,.29,.62,.3,.02,.47,.26,0,.08,.98,.11,.11,.04,.01,.46,0,0,.43,.97,.33,0,.49,.04,.46,.82,0,.3,0,.11,.29,0,0,.72,.15,.91,.09,.29,.37,0,.79,0,0,0,.17,0,.1,.24,.01,.06,.92,.59,.68,.08,0,.01,.58,.34,0,.32,0,.93,.01,.79,.12,0,0,0,.61,.02,.43,0,.97,.87,.16,.3,.03,.06,.02,.75,.73,.58,.97,.53,.35,.18,.58,.44,0,.96,.59,.01,0,.01,.81,.05,0,.25,.01,.57,.01,.28,.43,.73,.06,.96,.08,.88,.05,.71,0,.88,0,.32,.23,.66,.11,.35,.63,.53,0,0,0,0,.36,.67,0,.22,.77,.44,.85,0,0,.14,.01,.55,.05,.01,.32,.44,.03,.05,.92,0,.65,.34,.16,.06,0,.48,0,.45,.73,.52,.76,0,.1,.72,.42,.27,.18,.44,.01,.28,.88,.57,0,.96,.76,.15,.52,0,0,.02,.04,0,.01,.01,0,0,.3,.51,.4,.09,.53,0,.4,.94,0,.47,.57,0,0,.19,.57,.47,.3,.01,.14,.86,.5,0,.01,.01,.05,.48,.06,0,0,0,0,.03,0,.63,.6,.96,.29,.14,.8,.11,.54,.14,0,0,.98,0,.13,0,.09,.58,0,.04,.03,.06,.35,0,.16,.25,0,0,.83,.02,0,.44,.45,.42,.05,.33,.04,0,.56,.93,.71,.06,0,0,.59,.57,.09,.4,0,.37,.78,.53,.54,.01,.08,.21,.76,.06,0,.48,.06,.86,0,.01,0,0,.42,.08,.42,.17,.99,.34,.55,.49,0,.86,.37,.37,0,.12,.3,.91,.89,.01,.3,0,0,0,.96,.01,.9,.24,.97,0,.97,.51,.42,.07,.4,.44,0,.05,.12,.85,0,.02,.16,.01,0,.08,.18,.01,.29,0,.84,0,.87,0,0,0,0,.83,0,.12,.21,.09,0,.13,.26,0,.54,.43,0,.59,.95,.47,.01,.43,.94,.97,.62,.57,.91,.04,.05,.49,.55,.02,.13,.39,.07,.31,.78,0,.07,0,.04,.51,.74,.06,.18,0,.46,.07,0,.17,.77,.34,.48,0,.25,.33,.01,.2,.02,.07,.25,.03,.7,.96,.11,0,0,.53,.19,.67,.46,.4,.48,0,.38,0,.01,.06,.32,.35,.28,.76,.48,.31,0,.05,.16,.75,.35,.4,.9,0,.94,.15,.08,.44,.69,.15,0,0,.12,.86,.26,.96,.01,.28,0,0,.38,.58,.01,.08,.07,0,.96,.01,0,0,.59,.93,.51,0,.83,.15,.2,0,.75,.11,.01,.05,.09,.8,.01,0,0,0,.78,.04,0,.33,0,0,.98,.03,.56,0,.83,.03,.69,0,0,0,.95,0,0,.03,0,0,.61,0,.24,0,.76,0,.11,.86,.88,.1,.48,.12,.38,.56,.03,.87,.83,.67,.76,.04,.35,0,.66,0,.89,.87,.12,.11,0,.18,.35,.37,.93,.44,.17,.86,.01,.56,0,.3,1,0,.33,.01,.12,0,.17,.37,.7,0,0,.33,.01,.01,0,.56,.1,0,0,.84,.55,.29,.01,.05,0,.01,0,.58,.77,.85,0,0,.06,.18,0,0,.1,.66,.27,0,0,.06,.28,.06,.07,.01,0,.34,.88,.49,.12,.07,0,.91,.1,.03,.57,.45,.73,0,.15,.31,.68,.62,1,.91,1,.47,.98,.93,.16,.89,.32,0,.97,0,.05,0,0,.03,.17,0,.71,0,0,.73,0,.88,.39,.33,.12,.93,.05,.29,.02,.08,0,.22,.26,.48,.65,.98,0,.78,.17,.23,.2,.69,.01,.3,.01,.09,0,.92,.07,.26,0,.59,.15,.44,0,.82,.13,.01,.29,.79,1,.29,.09,.38,.01,.3,.65,.01,.67,.38,.24,.01,0,.47,.02,.01,0,0,0,.87,.65,0,.01,0,.02,0,0,.54,.82,0,.01,.01,0,.07,.75,0,.69,.02,.06,.38,.25,.5,.75,.83,.87,0,.84,.68,.22,.87,.02,0,0,0,0,.59,.16,.05,0,.3,.08,.15,.49,0,.81,0,.47,.14,.46,.83,0,.69,.82,0,.9,.01,.19,.02,.48,.35,.08,.26,0,.55,.12,0,.59,.97,.32,.81,.02,.67,.36,.01,.66,.06,.2,.12,0,.9,0,.67,.35,.55,0,0,0,.6,.01,.36,0,0,0,.33,.25,.05,.05,0,0,.78,.07,0,.95,.12,0,.11,.87,.75,0,.26,.61,.04,.84,0,.34,0,0,.09,.39,.8,0,.15,0,.62,.71,.03,.36,.83,.39,.87,.48,0,0,.89,.01,.01,.43,.4,0,.95,.19,0,.19,.76,.01,.26,.97,.01,.04,.09,0,.71,.39,.81,.7,.8,.38,0,.01,.02,.74,.12,.5,.57,.02,.01,.46,.02,.52,.66,.46,.57,0,.03,.68,0,.02,0,.04,.25,.33,.26,.01,0,.47,.32,.5,.47,.05,.12,0,.54,.12,0,0,.18,.05,.88,.14,.34,0,.94,.93,0,.68,.38,.39,.07,.11,.28,.12,.02,.08,.88,.67,.23,.65,.13,.04,.11,.11,0,.77,.84,.01,0,.04,.59,.22,0,.73,.38,.49,0,.68,0,.71,.12,.69,.02,.21,.2,.92,.01,.01,.03,.5,0,0,.04,0,.01,.24,.55,.91,.45,.03,.41,.21,.01,.07,.19,.58,.26,.01,.95,.55,.42,.16,.05,.07,.38,0,.03,.7,.03,0,.27,0,.03,.55,.9,.03,0,.01,0,0,0,0,.82,.51,.45,.02,0,.56,.01,.54,.69,0,.24,0,.02,.46,0,.56,.01,.43,.06,.87,.22,.16,.44,.1,0,0,0,.72,.09,.41,0,.94,0,.2,.13,.25,0,0,0,.62,.01,0,.36,.99,0,.08,.13,0,1,.27,.07,0,.08,.85,0,0,0,.88,.43,.42,0,.19,.68,0,.96,.03,.42,0,.96,.84,.12,.23,.77,.2,.01,.41,.02,.05,0,.99,.45,0,0,.05,.03,.1,0,0,0,0,0,.01,0,.72,.21,.08,.04,.02,0,.98,.15,.02,.11,0,.64,.01,.82,.05,0,.08,.06,.23,.02,.01,.27,0,.47,.14,.89,0,.01,0,.05,0,0,.32,.07,0,.18,.92,.85,0,.22,0,.34,.04,0,0,0,0,.04,.4,.8,.16,.06,.03,.02,.47,.29,.04,.86,.05,.27,.22,0,.01,.77,.86,.77,.52,.29,.81,0,.25,0,.41,.49,.33,.56,0,.3,0,.01,.01,.15,.36,0,.62,.85,.73,.44,.58,.41,.07,.4,.87,.95,.43,0,.02,.27,.45,0,.72,.2,0,.01,.91,.02,.23,.43,0,.86,.11,.01,.02,.86,0,.09,0,.34,0,.29,.7,.12,0,.29,0,.81,.94,0,0,.36,0,.01,.2,.22,.46,.79,.88,.36,.72,.01,.77,0,.12,0,.49,0,.41,.54,.75,.22,.29,0,.18,.99,.33,.7,.43,.01,.02,.01,.03,.27,.1,.12,.52,.47,.69,0,0,.08,0,.48,.01,.36,.01,.81,0,.62,.92,0,.81,0,.36,.38,0,0,.01,0,.13,.82,.02,.46,.16,.02,.17,.01,.2,.24,.2,.37,.79,0,0,0,.7,.1,0,.22,.69,.71,.12,.06,.01,1,0,.02,0,0,0,.15,.65,.02,.08,0,0,.1,.42,.95,.32,.01,.17,0,.3,0,.42,0,.4,.2,.32,.01,0,0,.45,.53,.76,.13,.05,0,0,.2,.86,.58,.01,0,0,.01,0,.07,.26,.13,.65,0,.89,0,.35,.34,.66,0,.24,.07,.09,.76,0,.64,0,.52,.32,.08,.28,.12,0,.22,0,0,.84,.78,.66,.02,.19,.01,.17,.93,0,.25,0,0,0,0,.9,.72,.51,.43,.99,.31,.44,0,0,0,.28,0,.77,.06,.01,.62,.01,.95,.36,.01,.5,.06,.82,0,0,0,.04,.06,.01,0,.15,0,.02,.01,.7,.57,.41,0,0,.07,0,0,.08,.06,.69,.19,.12,0,.34,.18,.86,.48,.04,.2,0,.37,.74,.03,.26,.1,.1,0,0,.04,.01,.87,.33,.56,.01,.48,.02,.01,0,.97,0,.95,0,.03,0,.28,.02,.13,.24,.67,.58,.02,.14,.74,.57,.23,.65,0,.34,.11,0,.38,.75,.93,.97,.17,0,.74,0,.02,.81,.94,.52,.27,0,0,.51,.94,.18,.04,.38,.08,0,.02,.37,.29,.37,.95,.57,0,.08,.01,.01,0,.11,0,.29,.9,.31,0,0,0,0,0,.1,.5,.02,0,.01,.33,.87,.55,0,.27,.03,.33,.31,.45,.15,.22,.08,.07,0,.83,.54,.6,0,.09,0,.95,.03,0,0,.02,.21,0,.49,.66,.73,.55,.01,.01,.04,.01,0,.17,.02,.34,.75,.8,.25,0,.06,.55,.95,.46,.67,.41,0,.31,.01,.01,.09,.01,0,.92,.66,.5,.99,0,0,0,.6,.22,.98,.16,.08,.13,.6,0,0,0,.38,.11,.04,.47,.19,.01,.49,.35,0,.01,.21,.36,.7,.1,.06,0,.19,.02,.45,.2,.04,.62,.13,.59,.14,.06,.08,.16,.14,.66,0,0,0,0,.04,.07,.04,.1,.05,.21,.98,.43,.86,.18,.14,0,.89,0,.03,.44,.44,.29,.07,.07,0,.34,.06,.27,.41,.19,.08,.19,.01,0,.25,.97,.76,.07,.41,.03,.98,.09,.37,.87,0,0,.32,0,.1,.3,.35,.15,.99,.09,.02,.42,.13,.52,.99,.05,0,.43,.21,0,.88,.04,.95,.17,.98,.69,.34,0,.77,0,.65,0,.68,.2,.06,.19,.1,.01,0,.51,0,.22,.52,.84,.02,.48,.01,.33,.24,.32,.27,.06,.69,.5,.02,0,.13,.4,0,.46,.82,.48,.36,.48,.37,.08,.07,.49,0,.03,.14,.21,.67,.51,.86,.65,0,0,.08,.75,.35,.96,.01,.2,.07,.07,.01,.48,.9,.25,.05,.97,0,0,.93,0,.65,.15,0,.03,0,.5,.03,.08,.38,.06,.22,0,.6,.01,.52,0];export{a as pvalData};
