const a=[.11,.04,0,.78,0,.4,.32,0,.98,.3,.01,.34,.66,0,0,.65,0,.39,.13,.69,.47,.02,.4,0,0,0,.02,.01,.29,0,.6,.24,.03,.52,0,.99,0,0,.84,.38,.69,0,.48,.77,.8,0,.06,.98,0,0,.37,.68,.22,0,0,0,.32,.09,.98,0,.03,.15,0,.84,.15,0,0,0,.81,.92,.91,.05,.01,.45,0,.26,.17,.02,0,.01,.36,0,.57,0,.15,.03,0,1,0,0,0,.72,.01,0,.62,0,0,.23,.05,.09,.41,0,.41,.41,.44,.72,.06,.01,.01,.3,.13,0,.22,0,.08,0,0,.12,.54,0,.98,.13,.52,.51,0,.76,0,.65,.02,0,0,0,.83,0,0,.45,0,.59,.04,.19,.08,.19,.3,0,.97,.04,.78,.11,.08,.46,0,.02,.26,.99,0,0,.65,.95,.86,0,0,.26,.77,.07,.13,.01,.12,.1,.01,0,.87,.09,0,0,.73,0,.91,0,.01,0,.07,.69,.25,0,.07,.12,.4,.8,0,.04,.97,0,.34,.67,.55,0,.14,.02,.43,.97,0,.66,0,1,0,.19,0,0,0,.25,0,0,.29,0,.18,.9,.73,0,0,.54,.3,.14,.29,0,.64,0,0,.1,.01,0,.21,.85,0,0,.46,.86,0,.01,.01,.19,0,0,0,0,.01,0,.1,.17,.04,.76,0,.28,0,.09,.02,.65,.61,.01,.07,0,.41,0,.14,.04,.14,.42,.24,.02,.92,.01,.96,.32,0,0,0,.41,0,0,0,0,0,.21,0,0,0,.49,.03,0,.11,.34,0,0,.11,0,.06,.29,.48,.68,.79,.31,.64,0,.38,.79,.48,.87,.56,.48,0,.04,0,.9,.5,.71,.85,.24,.28,0,0,.29,.01,.01,0,0,0,0,.08,.14,.15,0,0,.51,.11,.98,.55,.06,0,.39,0,.92,.02,.13,.05,.77,0,0,.68,0,.76,0,.13,0,.71,0,.01,0,.31,.13,0,0,0,.15,0,.06,.07,.04,.38,0,.06,.29,0,.39,.22,.03,.13,0,.61,0,.8,0,.92,.73,.43,.54,.94,.93,.44,.85,.06,.08,.01,.82,.7,0,.02,0,.64,.77,.35,0,.45,.01,0,.41,0,.2,0,.03,.01,.01,0,.03,0,0,0,.29,.03,0,0,.15,.65,0,.22,.94,0,0,0,.84,.01,0,0,.04,0,.56,0,0,0,.03,0,.38,.47,.01,.4,.37,.04,.08,0,.24,.98,.7,.39,.28,0,0,.52,.43,0,0,.02,.16,0,.42,.02,.01,.06,.97,.02,.2,.06,0,.01,0,.04,.23,0,.02,.31,.42,0,.15,.25,0,0,.39,.05,.01,.29,0,.07,0,.34,.31,.71,0,0,0,0,.89,.03,0,0,.81,.04,0,0,.01,.04,.04,.02,.01,.05,0,.09,.28,.01,0,0,0,0,0,.37,0,.05,.9,.06,.91,.01,.69,.49,.91,0,0,.09,0,.69,.54,.01,.98,.01,.63,.3,0,.57,0,.97,.02,.01,0,.01,.27,.02,0,0,0,.94,.52,.71,0,.51,.24,0,.01,.01,0,.71,.48,.35,.59,0,.89,.02,0,.01,0,0,0,.55,.01,0,.01,.66,.72,.12,.04,.34,0,0,.01,.23,0,.84,.23,.47,.08,0,.01,.01,0,.66,0,0,0,0,0,.09,0,0,.57,.18,.51,.51,0,.42,0,.1,.44,0,0,.06,.56,0,0,.01,.06,0,.42,.21,0,.04,0,.9,.15,.01,0,.53,.37,.02,0,0,.04,.25,0,.92,.02,0,.05,0,0,.97,.3,.37,.01,0,0,.02,.63,0,.36,.39,.76,0,.34,0,0,.35,.71,.87,.01,.02,0,.16,.92,.9,0,.12,0,.06,0,.03,.54,.7,.06,.13,.01,.01,.89,.01,.01,.01,0,1,.07,0,.63,.74,.15,.51,.66,.06,.04,0,0,.35,.01,.25,.75,.9,0,.54,0,0,0,.08,0,.03,.66,.4,.2,.83,.93,0,.07,0,.59,0,0,.07,.01,.57,0,.08,0,.06,.47,.02,0,0,.74,.09,.3,0,.05,.25,0,.49,.3,.25,0,0,.78,1,.24,.61,.24,0,.13,.73,0,.11,.67,0,.09,0,.11,0,0,.04,.06,.18,.68,0,0,0,.74,0,.98,.27,0,0,0,0,.06,.4,.04,0,.51,0,0,.66,.11,.07,0,.24,0,0,.03,0,.33,.01,.87,.27,.42,.38,0,0,.07,.24,.31,0,.3,.85,.03,.12,.05,.27,0,0,.01,.37,0,.29,.37,0,0,.35,0,.49,.1,1,.6,.23,0,.12,.02,.21,.5,.05,.01,.35,.06,.46,0,.92,0,.01,0,0,.37,.09,.99,.14,0,.6,.79,.29,.13,0,0,.01,.28,.45,0,.87,.1,.02,0,.78,.76,0,0,0,.85,.52,0,.01,0,.69,.01,.31,.94,.04,.14,.21,0,0,.23,.06,.23,.08,0,0,0,.03,.04,.19,.87,.19,.09,.08,0,.61,.45,.87,.91,.86,.2,.43,0,.03,0,.86,0,0,0,.14,.13,.82,0,0,.73,0,.43,0,0,.05,0,.73,0,0,0,0,0,0,0,.01,0,0,.34,.07,0,.06,.44,.03,.06,0,0,0,0,.34,.13,0,.94,.02,.67,0,.12,0,.12,0,.69,.01,.11,0,.53,.14,.76,.33,0,.01,.86,.02,.03,0,0,0,.27,.25,0,0,.11,0,0,.11,0,0,0,0,.59,.71,.54,.01,0,0,0,.78,0,.47,.77,.41,.46,.1,.43,.97,.04,.63,0,.71,.76,.96,.74,.76,.46,0,.02,.21,.1,.26,0,0,.01,0,0,.52,0,.61,.1,.12,.62,.34,.88,0,.87,.53,0,.77,.1,0,0,.45,.23,0,0,0,.04,.75,0,.84,.04,.37,.05,0,.55,.86,0,.3,.35,.52,.02,.01,.01,.04,.72,.02,0,0,.74,.02,.06,0,.94,0,.05,.55,0,.3,.31,0,0,.33,0,.56,.23,.29,.8,0,0,.39,.01,.04,.01,.05,0,0,.57,0,.03,0,.06,.01,.04,0,.54,0,.07,0,.44,.31,.75,.22,.69,.63,0,0,.38,.05,.21,.04,0,.04,0,.24,0,.23,.06,.73,.51,.06,0,0,.9,0,.03,0,.12,.21,0,.01,0,.71,.37,0,.01,.73,.02,.03,.97,0,.05,.01,.02,.44,.62,.02,0,.77,0,.81,.01,.59,.94,0,.39,.48,.01,.02,.5,0,0,0,0,0,.46,.17,0,.89,.01,0,.86,0,.91,0,.04,.86,0,.11,.29,0,0,.95,0,.69,0,0,.74,0,.97,.11,0,.09,.14,.82,.4,.77,0,0,.2,0,0,0,0,0,0,.94,0,.04,.16,.17,0,0,0,.03,.01,0,.93,.81,0,.72,.03,.15,0,0,0,.01,.47,0,.06,0,.86,.96,.98,0,0,0,.08,.87,.55,.31,.28,.81,.61,0,.5,.12,0,.24,.99,.65,.33,0,.01,.02,0,.97,0,.02,.96,.03,.06,.01,.63,0,.93,0,0,.08,0,.11,.32,0,.71,.85,.26,0,0,.14,.62,0,.04,.92,.8,.18,0,.02,.82,0,.04,.37,0,.15,.35,0,.37,.72,.99,.65,0,.02,0,0,.28,.95,.01,0,.13,0,0,.02,.13,0,.28,.41,0,.15,0,0,.01,0,0,.2,.17,.82,.02,0,.02,.61,.47,0,.63,.28,.86,.1,.04,.06,0,.23,.97,.2,.33,.62,.07,.03,.01,.32,.27,.15,.02,0,0,0,0,.29,.14,.45,0,0,0,.55,0,.01,.01,.57,.06,.01,0,0,0,0,0,.02,0,0,0,0,.45,0,.53,.87,.46,.07,.04,0,.55,0,.03,0,0,0,.27,0,.66,0,.25,0,0,.14,0,.19,0,.25,0,.63,.04,.32,0,0,0,.38,.02,.06,.08,.02,.56,.02,.02,.35,.57,.09,.51,.92,0,.54,0,0,0,0,0,.06,.59,0,.63,0,0,0,0,.44,0,.82,.54,.7,.11,.15,0,.18,0,0,.11,.5,0,.11,.26,.65,.04,.21,0,0,.03,.82,.27,.02,.4,0,.46,0,0,.02,.13,.69,.38,.05,.71,0,.01,.5,.95,0,.05,0,.21,.37,.13,0,0,.11,0,.42,.1,.9,.35,.2,0,0,.1,0,.01,.14,.12,0,.08,0,0,0,.02,.08,0,.79,.72,0,.02,.85,0,0,0,.05,.92,.21,.37,.17,.6,.16,0,.01,.11,0,.49,.02,.93,0,.18,.39,0,.16,0,0,.19,.6,.48,0,0,.2,0,.23,.6,.07,.03,.08,0,.04,0,.19,.7,.02,.27,.02,.31,.78,0,.76,.02,0,.75,.07,0,.01,.04,.89,.18,0,0,.51,0,0,.6,.04,.12,.27,0,0,.01,.01,0,.01,.24,.35,0,.39,0,0,0,.38,0,.7,.26,.05,.91,0,0,.67,.35,0,.27,.07,.01,.28,.94,.28,.93,.01,.19,.13,.09,.79,0,.8,.05,.18,0,.33,.98,.26,.52,0,.31,.19,.26,.03,.21,0,0,.12,.39,.14,.01,0,.41,0,0,.87,.87,.25,.1,.78,0,.12,.02,0,.98,.36,0,.65,0,.89,0,0,.62,.31,0,0,.04,.9,.03,0,.41,.01,0,.11,.58,.03,.89,0,.5,.94,0,.29,0,.01,0,.18,0,.02,0,.14,.02,.25,.8,.34,.18,0,0,0,.07,0,0,0,0,0,.29,.3,0,.01,.92,.47,.21,0,.01,0,0,0,0,.96,0,.19,.01,.84,0,.01,.02,.36,.32,.07,.83,.63,.2,0,0,.98,.75,0,.53,0,.1,.9,.01,.08,.75,.01,.67,0,.53,.02,.06,.14,.17,.18,0,.09,.06,.83,.07,0,.49,0,.62,.19,.01,.54,.46,.29,.47,.45,.22,.19,0,0,0,0,0,.09,.45,.65,0,0,0,0,.27,.22,.01,.88,.18,.43,.02,0,0,.06,.54,.08,.11,.12,.18,.01,0,0,0,.01,.05,0,.64,.01,.94,.23,0,.03,0,0,0,.01,.8,.22,.34,.9,.02,0,.28,0,.07,0,.27,.75,0,0,0,0,.63,.53,.82,.87,.76,.72,0,0,.01,0,.06,.27,0,.01,0,0,.01,.4,.75,0,.27,0,.34,0,.35,.06,0,0,.18,.03,.03,.18,0,.27,.1,.13,0,0,.99,0,.25,0,0,.01,0,.8,.01,.91,.37,.46,0,.18,.3,.02,0,0,.31,.79,0,.08,0,.02,.9,.85,.64,0,0,.1,.06,.03,.03,0,.42,0,0,0,0,.72,.22,.27,.97,.67,.08,.02,.63,.08,0,.04,.03,0,0,.96,.18,.44,.26,.69,0,.75,0,0,.22,.03,.24,0,.48,.58,.84,0,.27,0,0,0,.13,0,0,0,.01,.04,.03,.11,.19,0,0,0,.98,.82,.02,0,0,0,0,.37,.1,0,0,.01,.36,.57,.24,.54,.01,.17,0,0,.03,0,0,.02,.02,.26,0,.73,.44,0,.07,0,0,.02,.16,.07,0,.01,0,0,0,.03,0,.16,.04,0,.05,0,.42,0,.68,.05,0,0,.57,0,0,0,0,0,0,.29,0,0,.07,.08,0,0,0,0,0,0,.35,0,0,.11,0,.92,0,0,.75,.11,.31,0,0,.01,.11,0,0,0,0,.07,.78,.02,.18,.01,.37,.02,.66,.46,.46,.57,0,0,.53,.46,.63];export{a as pvalData};
