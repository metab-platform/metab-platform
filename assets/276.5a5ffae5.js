const a=[.05,.01,.5,.82,.97,.03,.05,.32,.65,.56,.41,.06,.21,.25,.3,.01,.17,.21,0,.93,.67,.68,.84,.34,.67,.79,.63,.92,.16,.92,.8,.67,.67,.26,.1,.22,.1,.21,.07,.74,.42,.61,.37,.4,.08,.25,.24,.01,.46,.39,.7,.38,.91,.61,.9,.25,.51,.35,.39,.77,.74,.79,.8,.36,.28,.71,.95,.41,.8,.37,.04,.89,.79,.69,.68,.41,.12,.87,.48,.36,.72,.65,.41,.52,.08,.13,.72,.26,.52,.2,.56,.14,.92,.99,.17,.02,.68,0,.18,.84,.78,.98,.11,.71,.45,.13,.41,.39,.56,.08,.3,.65,.52,.35,.55,.84,.53,.44,.15,.67,.29,.2,.36,.03,.64,.31,.5,.6,.7,.6,.64,.58,.95,.79,0,.33,.76,.34,.35,.7,.97,.29,.5,.93,.04,.57,.88,.81,.89,.13,.98,.28,.84,.28,.74,.84,.45,.05,.17,.4,.98,.63,.96,.12,.63,.59,.23,.45,.76,.96,.07,.03,.21,.86,.62,.31,.4,.68,.75,.76,.57,.8,.43,.74,.24,.02,.03,.02,.75,.88,.2,.33,0,.64,.89,.35,.5,.93,.12,.21,.48,.65,.49,.02,.64,.84,.88,.86,.88,0,.53,.44,.89,.53,.41,.61,0,.37,.48,.81,.36,.12,.44,.44,.04,.66,.66,.35,.64,.09,.18,.47,.75,.83,.03,.03,.39,.25,.23,.44,.83,.4,.92,.97,.57,.23,.83,.01,.58,.28,.48,.01,.22,.11,.92,0,.52,.75,.42,.78,.27,.16,.57,.95,.84,.36,.72,.41,.87,.99,.49,.12,.29,.85,.74,0,.89,.73,.59,.61,.78,.61,.28,.43,.1,.86,.33,.16,.45,.64,.81,.07,.31,.67,.83,.48,.16,.18,0,.83,.04,.94,.16,.26,.03,.83,.98,.79,.42,.28,.97,.72,.09,.05,.55,.93,.74,.24,.83,.96,.38,.28,.69,.51,.55,.07,.73,.34,.51,.05,.31,.73,.02,.01,.83,.64,.62,.93,.09,.83,.62,.95,.08,.35,.52,.97,.78,.77,1,.15,.94,.85,.05,.04,.33,.37,.24,.03,.59,.8,.96,.02,.07,.04,.16,.9,.66,.45,.63,.55,.96,.91,.22,.35,.92,.04,.04,.34,.08,.82,.06,0,.81,.77,.73,.22,.04,.46,.86,.98,.97,0,.19,.25,.35,.78,.49,.92,.24,.63,.01,.06,.91,.95,.1,.77,.35,.51,.26,.85,.81,.74,.11,.89,.34,.29,.65,.75,.82,.72,0,.56,.47,0,.43,.62,.31,.26,.31,.41,.66,.79,.51,.32,.98,.88,.39,.9,.69,.44,.76,.44,.49,.53,.99,.63,.42,.75,.91,.17,.3,1,.8,0,.73,.12,.87,.4,.99,.68,.89,.6,.24,.73,.18,.96,.79,.32,.54,.41,.24,.37,0,0,.85,.47,.09,.16,.26,.45,.87,.61,.96,.65,.66,.25,.81,.77,.42,.97,.79,.09,.64,.75,.29,.88,.19,.2,.69,.41,.38,.13,.66,.29,.5,.06,.95,.23,.74,.56,.85,.53,.56,.51,.76,.98,.05,.88,.57,.5,.92,.61,.96,.42,.64,.04,.09,.51,.53,.19,.93,.66,.74,.61,.33,.12,.2,.82,.38,.05,.09,.17,.02,.49,.25,.08,.34,.86,.37,.12,.84,.66,.57,.5,.84,.03,.53,.35,.46,.23,.6,.24,.25,.47,.55,.01,0,.43,.27,.61,.42,.8,.99,.81,.67,.68,.67,.2,.76,.51,.1,.03,.5,.49,.65,.43,.51,.54,.13,.14,.35,.15,.05,.57,.81,.26,.63,.7,.35,.03,.67,.95,.94,.33,.76,.61,.48,.25,0,.02,.71,.09,.22,.17,0,.08,.83,.17,.54,.01,.07,.96,.95,.28,.08,.31,.62,.83,.71,.58,.07,.35,.34,.47,.2,.37,.44,.9,.06,.46,.01,.72,.34,.34,.08,.74,.64,.47,.01,.69,.01,.23,.77,.66,.29,.32,.66,.99,0,.54,.85,.91,.75,.73,.37,.48,.04,.03,.98,.35,.54,.48,.57,.8,.27,.49,.42,.58,.44,.51,.28,.3,.93,.87,.96,.17,.76,.58,.79,.19,.76,.27,.35,0,.73,.79,.01,.28,.16,.23,.27,.74,.97,.32,.44,.04,1,.79,.35,.67,.63,.82,.13,.13,0,.13,.54,.16,.47,.7,.56,.82,.04,.47,.95,.79,.67,.38,0,.39,.71,.56,.81,.66,.4,.48,.29,.75,.92,.17,.45,.27,.55,.76,.17,.1,.58,.24,.06,.74,0,.83,.18,.19,.36,.42,.92,.82,.36,.2,.67,.55,.53,.39,.72,.62,.89,.01,.27,.19,.51,.74,.73,.01,.74,.06,.96,.18,.89,.52,.85,.41,.47,.8,.86,.57,.1,.82,.79,.48,.82,.28,.81,.4,.94,.35,.58,.45,.19,.35,.13,.53,.96,.83,0,.06,.17,.45,.92,.19,.72,.16,.97,.54,.01,.65,.25,.59,.2,.91,0,.64,.69,.04,.34,.51,.67,.16,.23,.49,.2,.58,.81,.01,0,.13,.92,.29,.16,.48,.49,.83,.01,.57,.91,.81,.22,.33,.63,.42,.18,.2,.88,.62,.01,.08,.51,.3,.53,.28,.85,.55,.73,.57,.26,.31,.48,0,.25,.79,.46,.86,.01,.94,.47,.65,.15,.4,.24,.09,.14,.09,.38,.6,.56,.37,1,.11,.74,.52,.54,.01,.56,.95,.73,.92,.48,.01,.17,.73,.58,.65,.43,.24,.02,.95,.39,.47,.01,.73,.48,.53,.33,.23,.36,.83,.1,.88,.89,.16,.76,.04,.54,.67,.76,.81,.19,.92,.56,.3,.22,.35,.77,.47,.21,.85,.75,.7,.44,.99,0,.86,.54,.48,.65,.66,.32,.25,.73,.45,.74,.77,.01,.84,.88,.84,.88,.13,.21,.52,.65,.57,.52,.27,.97,.58,.64,.05,.64,.07,.13,.19,.29,.69,.39,.76,.74,.14,.88,.41,.99,.62,.82,.62,.12,.65,.23,0,.01,.77,.96,.4,.59,.5,.34,.63,.4,.12,.06,.11,.2,.03,.61,.87,.48,.43,.01,.32,.34,.01,.57,.46,.87,.09,.42,.73,.07,.3,.21,.43,.24,.27,.49,.1,.02,.07,.36,.84,.01,.23,.21,.35,.85,.02,.02,.68,.61,.75,.49,.86,.7,.53,.09,.01,.25,.8,.5,.57,.67,.99,.93,.04,0,.26,.09,.02,.24,.14,.61,.85,.4,.01,.34,.81,.57,.58,.45,.38,.97,0,.71,.93,.41,.58,.36,.68,.37,.64,.68,.87,.11,.89,.15,.74,.5,.53,.32,.06,.92,.7,.79,.02,.77,.94,.79,.67,.8,0,.91,.97,.28,.58,.83,.67,.99,.2,.53,.68,.9,.98,.01,.54,.64,.33,.95,.26,.02,.59,.48,.94,.63,.53,.02,0,.93,.01,.27,.95,.88,.3,.61,.71,.75,.27,.2,.86,.67,.8,.03,.95,.86,.02,.36,.98,1,.05,.65,.9,.86,.16,.64,.47,.78,.63,.12,.39,.05,.87,.16,.32,.33,.67,.57,.56,.99,.63,.73,.79,.91,.39,.3,0,.23,.02,.6,.1,.45,.22,.38,.13,.57,.13,.79,.82,.91,.16,.78,.43,.19,.92,.03,.26,.43,.08,.59,.04,.33,.98,.96,.68,.13,.52,0,.82,.04,.71,.99,.76,.28,.45,.49,.12,.3,.86,.08,.15,.54,.56,.58,.4,.96,.57,.5,.05,.08,.63,.03,.59,.79,.84,.96,.92,.61,.5,.8,.14,.09,.81,.09,.06,.42,.76,.9,.76,.05,.85,0,.48,.68,.03,.93,.1,.88,.79,.67,.83,.99,.04,.44,.98,.03,.77,.87,.93,.21,.95,.4,.52,.75,.02,.99,.34,.77,.7,.95,.61,.91,.06,.67,.48,.6,.01,.26,.63,.98,.13,.98,.91,.79,.02,.6,.99,.56,.47,.67,.32,.93,.97,.37,.86,.77,.63,.75,.41,.12,.65,.97,.16,.68,.97,.47,.93,.28,.22,.12,.73,.95,.53,.92,.93,.94,.09,0,.84,.71,.01,.97,.7,.83,.21,.3,.65,.73,.77,.02,.94,.6,0,.91,.38,.25,.09,.33,.54,.28,.21,.56,.89,.01,.12,.62,.86,.85,.54,0,.89,.55,.57,.32,.87,.25,.72,.01,.44,.71,.51,.96,.61,.1,.74,.08,.27,.79,.46,.05,.24,.33,.78,.29,.48,.52,.33,.32,.53,.4,.14,.06,.89,.93,.6,.18,.85,.62,.4,.37,.14,.73,.28,.32,.49,.78,.76,.08,.83,.47,.5,.8,.43,.39,.9,.85,.63,.47,.01,.02,.25,.84,.9,.63,.72,.66,.05,.06,.66,.1,.85,.15,.02,.31,.79,.15,.91,.58,.93,.4,1,.81,.03,.5,.01,.57,.07,.92,.61,.16,.99,.71,.32,.82,.25,.19,.65,.39,.74,.79,.36,.98,.84,.38,0,.93,.44,.25,.83,.68,.63,.24,.69,.31,.89,.42,.71,.75,.45,.85,0,.56,.74,.48,.03,.1,.7,.02,.16,.99,.14,.08,.05,.42,.93,.73,.74,.64,.26,.35,.19,.61,.27,.27,.22,.66,.14,.9,.7,.67,.62,.66,.63,.01,.58,.51,.24,.3,.92,.31,.69,.25,.76,.43,.26,.4,.57,.99,.86,0,.19,.57,.06,.58,.82,.73,.53,.44,.41,.91,.4,.51,.99,.75,.76,.82,.69,.98,.9,.95,.82,.06,.76,.64,.26,.37,.38,.43,.69,.15,.41,.22,.42,.46,.8,.39,.41,.33,.13,.18,.64,.57,.99,.45,.38,.75,.82,1,.32,.05,.07,.51,.76,.53,.4,.57,.33,.83,.43,.94,.4,.51,.54,.77,1,.78,.81,.02,.88,.25,.74,.47,.96,.59,.46,.75,.31,.24,.69,.71,.69,.53,.12,.23,.57,.72,.84,.03,.54,.92,.07,.35,.67,.84,.59,0,.73,.71,.59,.35,.36,.58,.57,.82,.19,.37,.32,.95,.64,.56,.34,.81,.78,.91,.8,.63,.6,.34,.46,.94,.9,.65,.1,.35,.49,.65,.45,1,.53,.37,.93,.77,.2,.57,.55,.13,.67,.86,.73,.81,.46,.91,.9,.85,.89,.52,.6,.28,.69,.58,.1,.85,.01,.44,.64,.06,.7,0,.1,.43,.72,.98,.44,.75,.67,0,.61,.98,.1,.18,.4,.6,.36,.9,.19,.3,.36,.42,.58,.89,.21,.01,.57,.64,.2,.36,.19,.72,.69,.88,.62,.34,.71,.82,.58,.41,.95,.69,.86,.82,.04,.09,.65,.74,.19,.96,.64,.54,.44,.83,.39,.62,.61,.73,.98,.01,.04,.6,.2,.82,.35,.93,.31,.88,.52,.64,.33,.58,.75,.91,.34,.11,.99,.87,.78,.68,.66,.03,.47,0,.28,.03,.26,.49,.72,.02,.94,.59,.68,.96,.56,.77,.78,.09,.88,.77,.96,.74,.16,.67,.54,.72,.76,.87,.89,.59,.64,.96,.56,.47,.02,.54,.93,.39,.47,.45,.61,.29,.5,.89,.96,.98,0,.73,.23,.88,.95,.78,.76,.86,.31,.58,.14,.04,.37,.6,.8,.86,.47,.37,.86,.36,.06,.8,.25,.91,.53,.8,.63,.81,.06,.08,.08,.6,.47,.12,.7,.02,.72,.04,.74,.28,.45,.04,.12,.49,.46,.72,.14,.1,.53,.72,.12,1,.01,.83,.55,.07,.82,.48,.93,.34,.2,.89,.56,.61,.24,.43,.9,.84,.52,.3,.94,.99,.47,.1,.13,0,.96,.96,.83,.86,.97,.52,.47,.56,.75,.31,.06,.44,.14,.63,.79,.04,.8,.74,.1,.86,.91,.79,.81,.88,.47,.4,.26,.99,.65,.8,.67,.73,.99,.76,.85,.09,.77,.68,.45,.2,.75,.37,0,.84,.68,0,.47,.79,.99,.52,.45,.74,.5,.09,.15,.85,.74,.14,.67,.84,.04,.29,.58,.65,.46,.94,0,.68,.15,.45,.13,.09,.06,0,.04,.93,.79,.84,.84,.98,.62,.51,.6,.66,.13,.81,.33,0,.56,.68,.29,.85,.29,.62,.62,.03,.21,.69,.22,.94,.32,.76,.95,.61,.81,.58,.04,.21,.59,.03,.83,.94,.98,.73,.04,.74,.02,.58,.68,.83,.01,.87,.12,.7,.65,.84,.09,.51,.9,.52,.48,.67,.14,.08,.44,.39,.54,.99,.48,.6,.73,.98,.69,.88,.68,.07,.49,.18,.97,.03,.55,.45,.49,.81,.74,.62,.84,.69,0,.59,.62,.75,.21,.59,.39,.55,.41,.62,.31,.22,.65,0,.11,.4,.41,.55,.03,.12,.79];export{a as pvalData};
