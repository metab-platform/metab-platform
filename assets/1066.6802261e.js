const a=[.6,.71,.23,.31,.04,0,0,0,0,.03,.99,.86,.46,0,.95,.58,.49,.97,.05,.74,.36,.09,.51,.07,.01,0,0,.02,.33,0,0,.05,.03,.11,.13,.48,.51,.51,.01,.32,.56,0,.1,.64,.94,.56,.38,.02,.11,0,.3,.42,.02,.01,0,.82,.03,0,.61,0,0,.04,0,.83,.35,0,0,.1,.88,.22,.69,.21,0,.02,.07,.5,.56,.01,.38,.01,.47,0,.74,0,.77,.01,0,.96,.01,.55,0,.83,0,.36,.63,.01,.01,.74,.44,0,1,0,0,.83,0,.6,.54,.68,0,0,.15,0,.05,.33,.97,.11,.45,0,.15,0,.71,.16,.34,.09,.89,0,.2,0,0,.59,0,.79,.95,0,.73,0,0,0,0,.67,0,.32,0,0,.12,.72,.85,0,0,.42,0,.16,.39,.7,.01,0,.07,.46,.05,.68,.02,0,.12,.01,0,0,.02,0,0,0,.01,.01,.09,.31,0,0,.32,0,0,.02,.35,.35,.59,.74,0,.14,.54,.67,.52,.81,.91,0,.21,0,0,.47,0,.16,.63,.01,.07,0,.23,.58,.89,0,.23,0,0,.61,.15,.88,.05,.84,.01,0,.94,.09,0,0,0,0,0,.05,0,.48,.01,0,0,0,.98,.11,.63,.59,.02,.03,.44,0,.71,.97,.02,.95,0,0,.02,.62,.38,.08,.74,.31,.03,.35,0,.01,0,.19,.54,0,.05,.8,.64,.01,0,0,0,0,.06,0,.51,.18,.13,.58,.17,.73,0,.58,0,0,.05,.18,0,0,.79,.21,0,.01,0,.31,0,.22,.01,0,0,.34,0,.05,.02,.02,.26,.01,.82,.35,0,.17,.98,.66,.06,0,0,0,0,.55,.76,.15,0,.01,0,.02,.41,.55,0,.71,.43,0,.08,0,0,.36,.25,0,.09,.01,.16,.82,.11,.88,0,0,.08,.24,0,.1,.73,.32,.81,.16,.96,0,.37,0,0,.07,.03,0,0,.89,.01,.17,.01,.7,.26,.56,0,.9,.4,.47,.02,.47,0,.38,.35,.4,.01,0,.07,.03,.19,0,.06,0,.77,.47,.5,.52,.42,0,0,.99,.02,.01,.12,.14,.6,.46,.18,.36,.06,.22,.82,.27,.22,0,.18,0,.01,.44,.53,.02,0,0,.67,.01,.01,.07,0,.25,0,.06,0,.42,.21,.42,.05,.06,0,.28,.1,.54,0,.74,.01,0,0,.16,0,.37,0,0,.08,0,0,0,0,.87,.86,0,.38,0,.3,.01,.23,0,.02,0,.62,0,.16,.25,0,.13,.1,0,.72,0,.84,0,.56,.25,0,.04,.93,.45,.13,.54,0,0,.53,.44,.38,0,0,.77,.01,0,.93,0,0,.45,.2,.5,.99,.98,.39,.92,.03,.07,.02,.08,.22,0,0,.81,0,0,.01,.08,0,0,.05,.01,0,0,.02,.01,.62,.05,.41,0,0,0,.02,.07,.03,.49,0,.08,.16,.15,.28,0,0,.01,.83,.29,.03,.01,0,.01,0,.83,.08,.01,.04,.02,.09,.45,.01,.03,.12,.98,0,.45,.31,.94,.02,.02,.04,.3,.01,.85,.25,.16,0,.1,.56,.41,.96,.13,.12,.04,.21,.29,.18,.05,0,.39,.94,.01,.01,.01,.04,.67,0,0,0,.97,.34,0,.03,.61,.38,.58,.83,.01,.06,.33,.02,.38,0,.54,.35,.05,.14,.03,.86,0,.01,.02,.98,.95,.34,.27,.13,0,.67,.47,.27,.58,.08,.29,.02,.65,0,.48,0,.59,.88,0,0,.69,.66,0,.04,0,.02,0,0,.01,.27,.04,0,0,.05,.04,.84,0,0,0,.36,0,.15,.04,0,.12,0,.69,.29,.01,.32,.94,.29,.06,.1,.01,.97,.48,.32,0,0,.04,0,.92,.8,0,0,.19,0,.04,.7,.48,.66,0,.07,0,0,0,.62,0,0,.01,.76,.62,0,.21,.26,.3,.63,0,.09,.08,0,.01,0,.83,.74,.01,.97,0,.3,.01,0,.05,.52,.35,.31,.29,.05,.42,0,.41,.01,0,.52,.29,.03,.17,.09,0,.56,.1,.1,.19,.01,.05,0,0,.9,.64,.06,.64,.02,.15,.2,.02,.25,.8,0,.71,.16,0,.34,.24,.9,0,.01,.85,.27,0,0,.11,.59,0,0,.43,.01,.28,.01,.43,0,0,0,0,.05,.04,0,.66,.02,.02,.03,0,.18,.22,.33,0,.49,0,0,.01,0,0,.51,0,0,.07,0,0,.15,0,.18,0,.68,.11,.01,0,.44,0,.17,.86,.01,.86,.26,.77,.02,.19,0,0,.02,0,.94,.05,.97,.01,.13,.42,.33,.18,.66,0,.9,.74,.02,.25,0,.69,.71,.47,0,.02,.01,0,0,0,.86,0,.12,.02,.82,.05,0,.84,.43,0,0,.31,.65,0,0,.06,0,.01,0,.12,.44,.04,0,.05,.1,0,0,.09,.11,.62,.62,0,0,0,.6,0,.41,.03,0,.49,.97,.01,.58,.25,0,.03,0,.43,0,.21,.06,0,.05,.71,.03,0,.32,.25,0,.77,.03,.21,.34,.03,.59,0,.43,0,.46,.01,0,.17,.01,0,.16,0,0,.38,0,.28,.08,.82,0,.08,.1,.44,.01,.01,0,.35,.26,.02,.01,.11,0,.75,0,.01,.47,0,0,.01,.31,.05,.04,.21,.53,.13,0,.49,0,.11,0,.33,0,0,.01,0,0,.34,.28,.03,0,.57,.32,.04,.01,.7,0,0,.26,.03,0,.24,.04,0,0,0,.05,.1,0,.04,.15,.02,.34,.08,.13,0,.02,.61,0,.39,.12,0,.1,.56,.15,.66,.13,.23,.67,.81,.09,.04,.96,.29,.39,.76,.04,0,0,0,0,.13,.08,.2,0,.16,0,.2,.1,0,.4,0,0,.54,.31,.09,.03,.85,.09,0,.15,0,.42,.01,.67,.79,.32,.36,.16,.93,.73,0,.13,.07,.02,.27,0,.08,.46,0,.2,.29,.8,.04,0,0,0,.17,.34,.09,.21,0,0,.02,.83,.54,0,.01,0,.88,.04,.02,.92,0,0,.04,.15,.35,.18,.19,0,.01,.98,.04,.06,0,.29,.91,.02,.26,.97,0,.14,0,0,.01,.01,.18,.11,.31,.13,0,.27,.17,0,.2,.04,0,0,.93,.02,.06,.78,.06,0,.01,.69,.49,.78,.49,.39,.17,.96,.59,.01,.36,0,0,.14,.01,.01,.03,0,0,.02,0,.02,.57,.53,.02,0,.07,.09,.24,.02,0,.99,0,0,0,.54,0,.15,0,.12,.66,0,.1,.59,0,0,.1,.04,.01,0,.02,0,.78,.01,0,0,.68,.85,.61,0,.4,0,.4,.49,.36,.44,.71,.12,.94,0,.98,.85,.1,.25,.37,.04,.51,.6,0,0,.58,.06,0,.82,.03,0,0,0,.57,.2,.01,.14,.23,.05,.9,.22,0,.74,0,.13,0,.02,.01,0,.06,.06,0,.51,0,0,.02,0,.16,0,.34,.12,.3,.01,.57,.34,.18,.81,0,.24,.73,.07,.71,.83,.78,0,.03,0,.79,.08,.01,.31,.44,0,0,0,0,.34,.11,.29,.08,.03,0,0,0,.02,.18,.06,.35,0,.52,0,.96,.2,.34,.16,.32,0,0,0,0,.22,.59,.23,.7,.61,.06,.48,0,.02,0,.03,0,.11,0,.04,0,0,0,.79,.09,.66,.27,0,0,.44,.04,0,.22,.21,0,.01,.07,0,0,.61,.57,0,0,.01,.01,0,0,.54,.01,.04,0,.02,.01,.18,.02,.66,.07,.04,.22,.83,0,.31,.13,.29,.38,.02,.41,.01,0,.97,.69,0,0,0,0,.77,0,0,0,0,0,0,0,.21,.05,.72,.01,0,0,0,.45,.15,.02,0,.56,0,.62,.95,.78,.06,.56,.35,.39,.13,.23,.02,.28,.2,.48,0,0,0,0,0,0,.53,.27,0,.5,.55,.27,0,.14,0,.29,0,.08,0,0,0,.13,0,.08,.06,0,.18,.91,.02,.03,0,.65,.12,.04,.11,0,0,.99,.8,.08,0,.05,.61,.08,0,0,0,0,.49,.31,0,.88,.01,.74,.11,0,.33,0,.56,.66,.19,0,.47,.64,.16,0,.04,0,0,0,.67,.77,.96,0,.06,0,0,0,.07,.37,.62,0,0,.55,.47,.33,0,.16,0,0,0,.9,0,0,.76,0,0,0,0,.81,.69,0,.02,0,0,.18,.55,.02,.33,.99,.37,.02,.7,.14,.08,0,.71,0,.15,0,.59,.03,.03,.16,.06,0,.26,.49,0,.66,0,.02,0,0,0,.01,0,.16,.01,.62,.21,0,0,0,0,0,0,.06,0,0,0,.18,.01,0,.42,0,0,0,0,0,0,0,0,.03,0,.04,.25,0,0,.8,0,.02,.55,.39,.23,.09,0,0,.44,.49,.3,.87,.01,.57,0,0,.05,.35,0,0,0,.32,.17,.19,.03,0,0,0,0,0,.16,.6,.02,.03,.07,.01,.92,0,.11,.01,.56,.11,.98,0,0,0,.07,.35,.7,.01,.89,0,0,.32,.71,.17,0,0,0,0,0,0,.24,0,.18,0,.08,0,.16,.6,.58,0,.56,.03,0,.37,0,.1,.03,0,0,0,0,0,0,.59,.44,0,.01,.08,.93,0,.04,0,0,.5,0,.07,0,0,0,0,.92,.38,.28,0,.03,.38,.81,0,0,0,.68,0,.87,.53,0,.04,0,.06,.21,0,.65,0,.14,.04,.08,.05,.31,.68,0,.19,.05,.08,0,.12,.77,.02,.24,.26,.01,0,.52,.97,0,0,.11,.07,.18,0,0,.32,.07,.38,.35,.59,.05,.3,.28,.06,.8,.2,.01,0,0,.47,0,.47,.18,.33,.79,.09,.12,0,0,.59,.01,.17,.03,0,0,0,.01,.01,.04,.1,.07,0,.57,.45,.05,.09,.43,0,.16,0,0,.84,.49,0,.05,.37,.05,.05,.01,.05,.57,.15,.83,.78,0,0,.49,.09,.31,.58,.98,.78,0,0,.25,.04,.19,.03,.01,0,0,0,0,0,0,0,0,.08,0,0,0,.05,.41,0,0,.01,0,0,.87,0,.01,0,0,.03,0,.64,0,.18,.62,.54,0,.33,0,.26,.52,.16,0,.9,0,0,.83,0,0,.01,0,0,.36,.28,.83,.12,.32,.14,.03,.99,.19,.23,.06,0,.35,.03,.58,.16,.08,.77,.75,.24,.27,.58,0,0,.01,.28,0,.36,.14,.03,.5,0,.13,.01,0,0,.04,.37,.1,0,0,.1,.34,0,0,0,.66,.24,.02,.23,.7,.29,.03,.25,0,0,0,0,.64,.08,0,0,.02,.08,.33,.02,0,.38,.08,0,.01,.01,0,.16,.05,.07,0,.03,0,0,0,.76,.29,.16,.51,.99,.73,.39,.03,.32,0,0,.92,0,.08,.26,.68,0,.11,.58,0,.99,.7,.18,.56,.01,.38,.84,0,.01,.54,.05,.3,.04,.72,.95,.06,0,0,.38,.69,0,.03,0,.6,.38,.6,.27,.08,0,.13,.21,.4,.01,.51,.64,0,.01,.06,0,.5,.8,.26,0,.31,.71,.21,.01,.97,0,.92,.17,.12,.89,.07,0,.42,.01,.04,.03,0,.2,.01,.04,.01,.01,0,.78,0,.06,.01,0,.09,.72,0,.04,0,.19,.04,.01,.41,0,.09,.27,.01,.78,.05,.31,.31,0,.49,.12,.01,.04,.09,.04,.14,0,.59,.2,.33,.08,.02,.35,.3,.88,0,0,.06,0,.01,.98,.08,.05,.05,.02,0,.02,0,0,0,.16,.71,.02,.7,0,.66,.01,.01,.01,.58,0];export{a as pvalData};
