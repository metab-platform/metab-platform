const a=[.7,.21,.21,.71,.65,0,.57,0,0,.53,.39,.33,.94,.88,.23,.86,.35,.98,.76,.07,.94,.05,.1,.05,.06,.05,0,.27,.44,0,.04,.06,.9,.44,.76,.05,.18,.72,.95,.04,.25,.51,.65,.86,.71,.5,.12,.54,.02,0,.15,.67,.03,.31,0,.64,.04,.07,.48,.93,0,.69,.02,.48,.03,0,.1,.09,.88,.95,.79,.04,0,.01,.64,.61,.73,0,.58,.01,.95,.51,0,.23,.48,.03,.08,.83,.97,.54,.03,.23,0,.75,.05,.05,.49,.03,.98,0,.43,.04,0,.52,0,.51,.3,.77,.17,.02,.01,0,.02,.74,.9,.74,.95,0,.44,0,.7,.07,.63,.02,.6,0,.43,.03,0,.38,0,.02,0,0,.04,.69,0,.01,0,.78,.31,.8,0,.05,.35,.11,.64,.19,0,.76,.06,0,.42,.67,0,0,.09,.16,.12,.43,0,0,.47,.01,0,0,.5,0,0,.1,.32,0,0,.19,.04,.01,.24,0,0,.97,.68,.06,.32,0,.01,0,.64,.87,0,.63,.75,0,.94,0,.01,.99,.01,0,.4,.03,.43,0,.71,.79,.9,.06,.99,0,0,.62,0,.18,.1,.62,.11,.02,.56,0,0,.02,0,0,.11,.6,0,.48,0,0,.05,.1,.75,.67,.6,.26,.74,.37,.01,.21,.05,1,.01,.15,0,0,0,0,.41,.33,.29,.67,0,.85,0,.03,.35,.82,.46,.01,.24,.02,.34,.2,0,.36,.05,0,.04,.04,.21,.49,.05,.75,.88,.55,.23,.83,0,0,.46,.03,0,0,.2,.83,0,.03,0,.49,0,.14,0,0,.26,0,0,.51,.49,.44,.01,.01,.79,.19,0,.89,.32,.57,.03,.01,0,.12,.45,.7,.42,.31,.39,.01,0,.03,.51,.12,.12,.14,.19,.11,0,0,.49,.32,.1,0,.93,.02,.93,.7,0,.21,0,.04,.05,.6,0,.79,.89,.87,.35,.41,.28,0,.7,.02,0,0,.53,0,.47,.09,.38,.08,.5,.04,.13,.36,0,.91,.73,.57,.15,.45,.05,.42,.03,.03,0,0,.1,0,.84,.01,.03,0,.37,.71,.96,.83,.09,.23,.04,.39,.77,.85,.46,.73,.13,.06,.17,.17,.06,.92,.28,.57,.12,.01,.93,0,0,.6,.59,.61,0,.04,.55,.67,.63,.42,.06,.46,.12,.69,0,.12,.21,.83,.01,.25,0,.34,.27,.51,.01,.06,0,0,0,.44,0,.36,.23,.25,.89,.01,.01,.1,.13,.37,.06,0,.06,.27,0,.01,0,0,.4,.13,.32,.33,.05,.28,0,.02,.77,.16,.76,0,.14,.01,.81,.62,.01,.51,.74,.22,.28,.15,0,.06,.16,0,.55,0,0,.11,.85,0,.22,.06,0,.01,.14,.21,.54,.59,0,.48,.78,.77,0,.75,.61,0,0,.75,.18,.18,.32,.14,.25,.03,.34,.01,.03,.02,.42,.27,.28,.01,.19,0,0,.02,0,.5,.14,.8,.26,.74,.72,.23,.17,.19,0,0,.32,.01,.47,.02,.01,.09,0,.33,.83,.02,.62,0,.21,.5,.06,0,.86,.23,0,.61,.58,.08,.26,.53,.04,.1,.63,.31,.83,0,.01,0,.93,.42,.97,.07,.07,.99,.88,.33,.08,.38,.4,.11,.82,.78,.01,.66,.07,.77,0,.01,0,.2,.27,.25,.02,.15,.27,.65,.82,.96,0,.26,.01,.25,0,.04,.52,.76,.42,.01,.49,0,.01,.31,.07,.47,.98,.14,.03,0,.33,.13,.19,0,.08,.53,0,0,0,.54,0,.05,.37,.05,.01,0,.63,.16,.68,0,.01,0,.08,0,0,.03,.07,.56,.14,.37,.68,.11,0,.1,.19,0,.1,.04,0,.78,.06,.15,.28,.27,.69,.1,.18,.53,.96,.14,.15,.92,.81,.01,0,.29,0,.58,.34,0,.01,.05,0,.99,.71,.74,.22,0,.01,.15,0,.09,.86,.19,.04,0,.76,.96,0,.52,.86,0,.52,.28,.3,.93,.15,0,0,.55,.77,.11,.2,.54,.97,0,.01,0,.37,0,.81,.8,0,.56,.56,.74,0,.04,.19,.34,.59,.53,.77,.02,.16,.37,.05,.02,.82,.07,0,0,.16,.27,.77,.52,.79,.6,.67,0,.03,.23,0,.09,.02,0,.3,.58,.22,.02,.8,.19,.13,0,.21,.12,.33,0,.07,0,.01,.77,.11,.35,.09,.01,0,0,.61,.28,0,.53,0,0,.67,.02,.4,.16,.55,.18,.47,0,0,0,.59,.03,.08,.01,0,.05,.23,0,.62,.05,.92,0,0,.29,.3,.1,.28,0,0,.24,.19,.2,.3,.26,.7,.33,.05,0,.71,0,.11,.57,.02,.01,0,.77,.72,.48,.79,.03,.06,.63,.06,.63,0,.32,.85,.34,.66,0,.91,.01,.08,.69,.04,0,.01,.3,.66,.05,0,.59,0,0,0,.05,.09,.08,.13,.05,0,.6,0,.86,.06,.34,0,.01,.06,.29,0,0,.08,1,.51,0,0,.16,.46,0,.6,.31,0,.17,.63,.55,.18,.16,0,.01,.5,0,.34,.12,.8,0,.96,.43,.15,.61,.8,.32,0,.27,.83,.65,.68,.3,.84,0,.29,0,.67,0,.01,.91,.61,0,.98,0,0,.72,0,.37,.85,.73,.47,.58,.11,.11,.29,.06,0,.05,.22,.64,.75,.96,0,.45,.01,.31,.03,.08,0,.14,.42,.19,0,.75,.6,.03,0,.33,.01,.05,0,.08,.26,.35,.35,0,.18,.09,0,.58,.08,.72,.46,0,.6,.42,0,0,.07,.75,.02,.29,0,0,0,.06,.31,0,.01,0,0,0,.06,.94,.7,0,0,0,0,0,.93,0,.73,.05,.52,.88,.91,.27,.61,.8,.35,0,.14,.07,.21,.13,.08,0,0,0,0,.52,0,.01,0,.82,.12,.12,.27,0,.82,0,.4,.4,.79,.12,0,1,.88,0,.05,0,.74,0,.56,.45,.05,.16,.05,.22,.86,0,.62,.8,.81,.73,0,.03,.87,0,.11,.09,.09,.15,0,.14,0,.62,.1,.52,.01,0,0,0,.05,.65,0,.02,0,.04,.64,.03,.14,0,.1,.89,.58,.58,.97,.55,0,.01,.47,.9,.09,0,.93,.93,.47,.51,.15,0,0,.01,.07,.2,0,.68,0,.03,.38,.01,.45,.02,.08,.05,.67,0,0,.43,.01,.05,.35,.39,0,.7,.41,.02,.04,.5,.81,.91,.59,.52,.15,.92,0,.57,.52,.66,.11,.51,.03,0,.07,0,.32,.15,.33,.12,.08,.23,.53,0,.6,.77,.83,.28,.01,.1,.22,0,.33,0,.89,.85,0,.01,.53,0,.16,.83,.33,.75,.05,.11,0,.06,.67,0,0,.79,.12,.46,.1,.07,0,.92,.54,.07,.58,.75,.41,.14,.03,.13,.25,0,0,.04,.48,.43,.76,.05,.14,.12,.12,0,.94,.42,0,0,0,.33,.41,0,.62,.01,.18,.23,.48,0,.23,.21,.82,.01,.07,.26,.01,.21,.32,.08,.24,0,.01,.28,0,.06,.1,.17,.4,0,0,.96,.71,.47,.13,.34,.52,.93,.25,.32,.09,.84,.25,.75,.01,.2,.06,.24,.29,.02,0,.17,0,.02,.58,.5,.01,0,0,0,0,0,0,.61,.53,.65,0,.56,.08,0,.69,.75,0,.44,0,.02,.01,0,0,.64,.29,.9,.5,.48,.28,.14,.26,0,.14,0,.04,.11,.07,0,.17,0,.23,.24,.63,.06,0,0,.53,.13,0,.05,.57,.02,.1,.29,.03,.01,.13,.79,.02,.01,.52,.8,.01,0,.04,.7,.62,0,.36,.8,.01,.57,.58,.29,0,.24,.05,.09,0,.73,.13,.26,0,.17,.05,0,.66,.44,0,0,0,0,.03,0,.01,0,.02,0,0,0,.57,0,.05,0,0,0,.06,.25,.17,0,0,.36,0,.04,0,.12,.47,0,.77,0,0,.62,0,.06,.42,.69,0,0,.02,0,0,0,.28,.83,0,.74,.24,.68,0,.42,0,.22,0,.19,0,0,0,.47,.59,.33,.06,0,.62,.26,.17,.24,.04,.55,.23,.09,.64,.01,.5,.94,.77,.31,.23,.48,.88,.01,.01,0,.44,.06,.42,.4,0,.26,.03,.2,.01,.19,.69,0,.24,.99,.66,0,.89,.77,.26,0,.55,.07,.45,0,.91,.47,.33,0,.9,.06,0,0,.65,.27,.46,.01,0,.65,.01,.07,.03,.97,0,0,0,.4,0,0,.72,.02,0,0,0,0,.69,0,0,.08,0,0,.47,.31,.82,.33,.11,0,.61,0,.83,0,.39,0,.59,0,.19,.09,0,.83,.1,0,.36,.57,.77,.24,.04,.44,.11,.01,0,.13,.3,.6,.82,.72,.92,0,0,0,0,0,0,.44,.09,.5,0,.33,.83,0,.83,.01,.84,0,0,0,.05,.06,.05,0,0,.27,.99,.01,0,.02,.18,.15,.56,.24,.53,.06,0,0,.66,.15,.09,.4,.98,.73,0,.01,.24,.12,0,0,0,.12,.17,.5,.17,.62,0,0,0,.01,.41,.75,.41,.62,.23,0,.08,0,.41,0,.37,.7,.42,.03,.13,0,.54,.25,.77,.5,.06,0,0,.13,.43,.31,0,0,0,0,0,.01,.55,.01,.89,0,.36,0,.34,.66,.25,.08,.26,.04,0,.41,0,.38,0,.1,0,.02,0,.08,0,.15,0,0,0,.74,.57,.02,.05,.04,.28,.79,0,.71,0,0,0,0,.51,.56,.11,.67,.38,.84,.23,0,0,0,.84,0,.87,.01,0,.79,.03,.18,.19,0,.65,.3,.66,0,.7,.01,.28,.36,0,0,.13,0,0,.13,.07,.87,.39,.12,0,.04,.1,.23,0,0,.49,.14,.05,.02,.02,.93,.38,.71,.07,.17,0,.22,.49,.01,.68,.76,.05,0,0,.5,.2,.01,0,.64,.74,.8,.08,0,.01,.66,.4,.01,0,0,0,.31,.29,.01,.75,.6,.19,.13,.13,.5,.37,.05,.96,0,.79,.01,0,.09,.89,.08,.17,.65,0,.83,.25,.09,.77,.65,.4,.37,0,.01,.29,.43,.08,.21,.41,0,0,.02,.23,.29,.23,.76,.38,.1,0,.23,0,0,.66,.44,.01,.35,0,0,0,.03,.69,0,.76,.76,.14,0,.78,.07,.54,.01,0,.2,0,.27,.04,.14,.1,.31,.09,.89,.02,.61,.02,.4,.01,.5,0,.11,.27,0,0,.02,.86,0,.32,.54,.7,.24,.48,.4,.39,.63,.59,0,0,.22,.57,.98,0,.18,.81,.74,.48,.04,.67,.32,0,0,.01,.23,.45,0,.41,.93,.4,0,.22,.01,0,0,.07,0,.78,.02,.02,.12,.41,0,0,0,.23,.3,.07,.15,.27,.29,.67,.11,0,0,.25,.12,.53,0,.21,0,1,.43,.99,.27,.05,.23,.6,.06,.48,.38,.23,.13,.23,.66,0,0,0,0,0,.08,.96,.18,.53,.48,.61,.21,.03,.37,.27,0,.95,0,.53,.33,.5,.03,0,.24,.01,.68,.58,.55,.36,.02,.72,.37,.02,0,.18,.96,.36,.11,.07,.03,.85,.02,.39,.22,.62,.01,.59,0,.16,.48,.55,.66,.84,.05,.01,.45,.57,.39,.25,.18,0,.34,0,0,.42,.1,.97,.41,.34,.69,.89,0,.72,0,.93,.05,0,.15,.21,.01,.74,.01,.2,.51,0,.09,.57,.86,.09,.39,0,.08,0,.15,.44,.48,.65,.42,0,.46,.24,.27,0,.8,.15,.05,0,.31,.6,.05,.05,.24,.01,.01,.02,.79,.52,.23,.66,.72,0,.03,.37,.04,.06,.92,.24,.17,.01,.71,.04,.15,1,.05,0,.09,.01,0,.91,.25,.41,.01,.01,.13,0,.02,.01,.56,.63,0,.56,.97,.92,.27,.02,0];export{a as pvalData};
