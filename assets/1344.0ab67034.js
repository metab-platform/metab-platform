const a=[.01,0,.04,.11,0,.85,.4,.33,0,.47,0,.58,.93,0,0,.67,.04,.59,.49,.66,.92,.13,.57,0,0,0,.15,.43,.35,0,0,.13,0,.06,0,1,0,0,.09,.03,.37,0,.33,.77,.63,0,0,.01,0,.14,.02,.5,.13,0,.18,0,0,.01,.35,0,.24,0,0,.69,0,.07,0,0,.12,.85,.24,0,.52,.42,0,.74,.01,.05,.08,.01,.12,0,.9,0,.43,.09,0,.17,0,0,0,.52,.53,0,.14,.98,0,.94,.79,.2,.66,0,.82,.85,.66,.14,.14,.01,0,.3,.65,.96,.59,.03,.22,0,.64,.01,.05,0,.93,.33,.29,.65,.25,.64,0,.42,.41,0,.01,.04,.65,.01,0,.16,.01,.84,.01,.05,0,.13,0,0,.27,.28,.64,.39,0,.47,0,.32,.84,.15,.14,0,.02,.57,.46,0,0,.44,.67,.36,.56,.01,0,.04,.04,0,.66,.05,.01,.01,.01,0,.99,0,.01,0,.52,.28,.43,0,.73,.67,.27,.95,.01,.45,.53,.11,.5,.06,.02,0,.3,.12,.62,.32,0,0,0,.22,.25,.82,.18,.06,.19,.34,.03,0,.94,0,.02,.35,.18,.62,0,0,.15,.84,.5,0,0,0,0,0,.5,.01,.21,.4,0,.35,.66,.57,0,0,.02,.16,.73,0,.73,.01,.31,.43,.58,.74,.64,.18,0,.34,.2,.07,0,.55,.58,.08,.04,.03,.14,0,.49,0,.31,.85,.63,0,.04,0,.09,.06,0,.28,0,.54,0,.07,.03,0,0,0,0,.02,.4,0,0,0,0,0,.41,.09,0,.94,.26,.48,0,.01,.37,.05,.85,0,.12,.26,.49,0,.02,.13,.01,0,0,.6,.76,.4,.42,.03,0,0,.71,.09,0,.92,0,0,0,.38,0,.03,.46,.59,.25,0,.02,.37,.54,.56,.03,.24,.24,.17,.29,.44,.14,.27,0,.02,.3,.02,.43,.37,.01,0,.16,.45,.69,0,.95,.38,.37,.02,0,.85,.2,.01,.93,0,.48,0,.17,.09,0,.04,0,.12,.05,.27,.01,0,.34,.01,.01,.98,.04,.78,.9,.08,.49,.63,0,0,.19,.6,.93,.22,.69,0,.17,.16,0,.2,.58,.94,.29,0,.01,.44,0,.13,.02,0,.47,.2,.1,.13,.1,.26,0,0,0,.28,.42,0,0,.2,.01,0,0,.57,.34,0,.53,.07,0,.84,0,0,.08,0,0,.43,.15,0,0,.05,.04,.34,0,0,.18,.99,.01,.8,0,.89,.75,.34,0,0,.05,0,.07,0,0,.02,.38,.11,.02,.79,0,0,.01,0,.03,.28,.02,0,.01,.72,0,0,.17,0,.01,.15,.02,.73,.2,0,0,.62,.22,.77,.74,0,.04,0,0,.13,0,.03,.46,0,.19,0,0,.3,.14,0,0,.1,0,.84,0,.36,.22,0,0,.26,.01,0,.85,0,.98,.77,.13,.46,.02,.53,.52,0,.03,0,.07,.01,.43,.06,.12,0,0,.22,.84,0,.56,0,0,.39,.36,0,.21,.69,0,0,0,.21,0,.31,.5,.31,.28,.97,.03,.01,.06,.33,.81,.17,.04,.17,.01,.98,.79,.17,.4,.09,0,0,.82,.67,.01,.04,0,.36,.05,.78,.45,0,0,.04,0,0,.5,.3,.62,.14,.37,0,0,.01,.9,.69,0,0,.03,.54,.1,.05,.03,.01,.31,.29,.68,0,.18,.07,.06,.54,0,.38,.11,.53,.02,.35,.16,.79,.15,.48,.04,.15,.02,.27,.45,.34,.3,0,.15,.7,0,.01,.06,.05,.32,0,.23,.42,.93,0,0,0,.3,.34,.95,0,.45,0,0,.56,0,.66,.84,.04,0,.46,0,.01,0,.45,.1,.86,0,0,0,.98,.92,.01,.61,0,.01,0,.05,.62,.97,.01,0,0,.02,.26,.08,0,0,.12,.3,.13,.02,.74,0,.53,.71,.21,.48,.02,0,.97,.36,0,.62,.65,.54,.26,.29,.06,0,.22,.03,.63,0,.26,.03,.62,.48,.81,.79,.02,0,.84,0,0,.16,.33,.64,.77,.16,.99,0,.72,.14,0,0,.42,.95,.32,0,.04,.27,0,.99,.03,0,0,.7,.45,.67,0,.67,.09,0,.76,.03,0,0,.11,.49,.02,0,.03,0,0,0,.25,.03,.32,0,.08,0,.44,.02,.34,.25,.81,0,.01,.01,.07,.48,0,.58,.67,.67,.03,.47,.09,.04,.68,.71,0,0,.12,0,0,.61,.1,.08,.34,.69,.02,0,0,0,.94,.02,.52,.73,.26,0,.17,0,.58,.01,0,.03,0,.31,.01,.31,0,.94,0,.1,.7,.12,.1,.53,0,.01,.03,.21,.12,.19,.34,.84,.04,.57,0,.82,.11,.14,.1,0,0,.12,.44,.06,0,0,.55,.02,.23,.02,0,.8,0,.03,0,.15,.05,0,0,.39,.47,.12,.18,.94,.09,.66,.03,0,0,.62,.78,.07,.53,.03,0,.06,0,0,.62,0,0,0,.62,0,0,.03,.09,0,.99,.01,.06,.75,0,.18,.2,.57,.22,.25,0,.28,0,.54,0,.01,0,0,0,.73,.01,.42,.02,.03,.66,0,.46,.03,0,0,.01,.12,0,0,.01,.06,.02,0,0,0,0,.08,.81,.06,0,.14,.04,.19,0,.19,.22,.68,0,.12,.04,.96,.51,.36,.08,.11,0,0,.02,0,.88,0,.81,.85,.9,.03,.08,.5,.36,.11,.5,.09,.16,0,.01,0,.39,.31,.01,.06,0,0,0,.02,.86,.56,.63,0,.44,.58,.01,.1,.06,.03,.21,.27,.01,.99,.79,.9,.89,.98,.7,.95,.05,.12,0,.96,.32,.37,.99,.01,.85,.18,0,.24,0,0,0,0,.21,0,.16,.09,.36,.45,.23,0,.69,.52,.88,0,.99,.06,.68,.13,.15,0,.44,0,.24,.89,0,.01,.83,.83,.02,.14,.04,.58,.41,0,0,.87,.03,0,.51,.07,.53,0,0,0,.7,.35,0,0,.38,.05,0,.01,.14,.41,.08,.52,0,.16,0,0,.3,.11,0,.79,.08,.4,.99,.03,0,.78,.24,.1,0,.92,.02,.01,.22,.67,.15,.33,.35,0,0,.14,.57,0,0,0,0,0,.72,0,.42,.99,.03,.03,.98,0,.27,.14,0,.32,0,.65,0,.83,.65,.91,.32,.97,0,0,.86,.07,0,0,.36,.07,0,0,0,.59,.09,0,.01,.69,0,0,.22,0,.01,.38,.07,.45,.57,.02,.12,.07,.02,.33,.71,.45,.28,0,.01,.26,.04,0,.01,0,0,.39,.01,0,.56,0,.47,.92,.35,0,.06,0,.5,.04,.33,.13,0,.2,.95,0,0,.05,.28,.83,.13,.04,.05,0,.2,.29,.09,.02,.1,0,.24,.11,0,.41,.05,.12,.34,.96,.01,.01,.25,.05,0,0,.04,.13,0,.23,.09,.34,0,0,.28,.24,.02,.3,0,.29,0,.02,0,.02,.26,0,0,0,.67,.58,.14,0,0,.01,.9,.32,.3,.74,.2,0,.71,0,.1,.1,.01,.27,.11,.78,.42,.72,.29,.01,0,.28,.2,.03,.01,.23,.02,.49,.84,0,.58,0,0,.04,.06,.04,.17,.66,.42,.12,.9,0,.01,0,.33,0,.02,.78,.28,0,0,0,.51,0,.07,.07,.38,0,.56,0,.12,.31,.13,.01,0,.01,0,0,.99,.12,0,0,.2,.97,.3,.02,0,0,.14,.88,.89,.19,.01,.01,.04,.13,0,.42,0,.24,0,0,0,.34,0,0,.26,.44,0,0,.14,.92,0,.94,.6,.04,1,.58,.83,.09,.08,.95,0,.9,.74,.33,.63,0,.05,.27,.01,.57,.91,0,.96,.02,.3,.39,.1,.92,.97,.88,.03,.6,.72,.4,0,.37,.1,.04,.48,.58,.36,.06,.92,.14,.07,.89,.01,.03,.5,.94,.38,0,0,.06,.2,0,.43,.01,.59,.24,.02,.01,0,.05,.23,.83,.13,0,0,.47,.29,.07,0,.49,.63,.86,.64,0,.5,.02,.48,.01,.04,0,.89,.46,0,.62,.26,0,.06,0,0,.57,.47,.36,.93,.05,0,.12,0,.66,.04,.46,.25,.21,.16,.16,.85,.24,0,0,0,0,.01,.09,.99,.63,.01,0,.51,.17,.02,.45,.7,.4,.88,0,.49,.01,.04,.37,.47,.22,.49,.88,.31,.07,.49,.62,.01,.01,0,.15,.68,.92,.55,0,.05,.58,.11,.02,.05,.48,.74,.99,.01,.54,.48,0,.08,.17,.97,0,.41,.01,0,0,.03,0,.52,.46,.05,0,.01,.2,0,0,.01,.19,.34,.58,.01,0,.62,.13,.05,.02,.01,.1,0,.48,.75,.01,0,.96,0,0,0,.51,.06,0,0,0,0,0,.12,0,0,0,.51,.24,.02,0,.05,0,0,.28,.5,.36,.01,.84,.01,0,.35,0,.25,0,.43,0,0,.43,0,0,.1,.7,0,.01,.65,.12,.04,.26,.74,.69,0,.02,0,0,0,.01,.03,.01,.71,0,0,.45,0,0,0,.07,.9,0,.01,.41,.01,.01,.25,.21,.03,.07,.35,0,.09,.09,0,.25,0,.16,0,.18,.57,.52,0,.76,.84,.75,0,.02,.28,.04,.4,.24,.92,0,.16,0,0,0,0,.04,.08,.43,.08,.21,.46,.6,0,.91,0,.31,.54,.03,.57,.03,.06,.17,0,.37,0,0,0,0,.03,.05,.66,.79,.4,0,.19,.01,.18,0,.57,.54,.8,.11,.08,.14,0,.99,1,0,.01,.97,0,.76,.26,.87,0,.64,.85,.94,0,0,0,0,0,0,0,0,0,0,.5,.13,.82,0,.96,.69,.82,.05,.09,.05,0,.13,.31,.36,0,.04,.01,0,0,0,0,0,.54,.07,.44,.98,.37,.69,.1,.02,.16,.15,.17,.41,0,.66,.66,.04,.36,.12,.36,.03,.01,0,0,.87,.86,0,0,.05,.12,.66,0,.02,.13,.86,.01,.47,0,.78,.66,.23,.03,.42,.57,.11,0,0,.82,.42,.18,.24,.85,.4,0,0,0,0,0,.04,.08,.03,.82,0,.76,0,0,0,.38,.98,.88,.9,.77,0,.06,0,0,.01,.73,0,.16,.5,.5,0,0,0,.33,0,0,.07,.3,.86,.57,.5,.01,0,.79,0,0,0,.04,.13,.02,.33,.2,.09,.84,.2,.47,.45,.25,.27,0,0,.65,.24,0,.19,0,.74,0,0,.36,.89,.43,0,.25,0,.02,.01,.46,0,.41,0,.61,.7,0,.21,0,.19,.42,.22,.31,0,.17,0,.59,0,.21,.22,.04,.14,0,.08,.41,.2,0,.42,.77,.05,0,0,.1,.27,0,0,.1,.41,.48,.99,.71,0,0,.2,0,0,.13,.45,.26,.01,0,0,.05,.61,.41,.07,.11,.89,.26,0,.53,.91,0,.03,.21,0,0,.4,.12,.03,.19,.19,0,.15,0,0,.2,.09,.05,0,.12,.03,.6,.02,.05,0,0,.55,0,.15,0,0,0,0,.25,0,.57,0,.01,0,.48,.31,.2,0,0,.43,0,.33,.59,0,0,.15,.26,.3,.11,.94,.03,.39,0,0,0,0,.68,.12,.5,.61,0,.27,.02,.48,0,0,.98,.64,0,.24,0,0,.13,.06,0,.7,.48,0,0,0,0,0,.03,.01,.19,.02,0,.98,0,.12,0,.87,0,0,0,0,0,0,.33,.72,0,0,0,0,0,.29,.04,0,.11,0,0,.33,0,.03,.39,.05,.02,0,0,.53,.3,0,0,.01,.41,0,.02,0,.49,0,.72,.14,.02,.22,0,.14,.32,0,.6,.03,.27];export{a as pvalData};
